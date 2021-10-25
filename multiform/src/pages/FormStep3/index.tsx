import { ChangeEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
      return
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      alert(JSON.stringify(state));
    }
    else {
      alert('Preencha os dados');
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    })
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
            <input 
              type="email"
              value={state.email}
              onChange={handleEmailChange} />
        </label>

        <label>
          Qual seu GitHub?
            <input 
              type="url"
              value={state.github}
              onChange={handleGithubChange} />
        </label>

        <Link 
          to="/step2"
          className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}