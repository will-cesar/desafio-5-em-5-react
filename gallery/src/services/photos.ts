import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 as createId } from "uuid";

export const getAll = async (): Promise<Photo[]> => {
  let list: Photo[] = [];

  /**
   * - imagesFolter = Criação da referência da pasta images dentro do storage do Firebase
   * - photoList = Lista de todas as imagens que estão na referência
   */
  const imagesFolter = ref(storage, "images");
  const photoList = await listAll(imagesFolter);

  for (let i in photoList.items) {
    /**
     * - A variavel "photoUrl" armazena o link de download de cada imagem     *
     * - Esse link é pego pelo método "getDownloadURL(), passando como parâmetro o item
     */
    const photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export const insert = async (file: File) => {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    /**
     * - randomName = cria um hash random
     * - newFile = cria uma referência para o novo arquivo, no primeiro parâmetro é passado em qual storage
     * será armazenada a imagem, e no segundo será passado a pasta e o nome do novo arquivo
     * - upload = recebe a referência do arquivo que foi inserido no storage
     * - photoUrl = recebe a url de download do arquivo
     */
    const randomName = createId();
    const type = file.type.split("/")[1];
    const newFile = ref(storage, `images/${randomName}.${type}`);

    const upload = await uploadBytes(newFile, file);
    const photoUrl = await getDownloadURL(upload.ref);

    return { name: upload.ref.name, url: photoUrl } as Photo;
  } else {
    return new Error("Tipo de arquivo não permitido");
  }
};
