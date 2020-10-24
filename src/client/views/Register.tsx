import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetAccessToken } from '../utils/api';

interface RegisterState {
  name: string,
  email: string,
  password: string
}
interface RegisterProps extends RouteComponentProps { }


export default class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json('/auth/register', 'POST', { name: this.state.name, email: this.state.email, password: this.state.password })
      if (result) {
        SetAccessToken(result.token, { userid: result.userid, role: result.role })
        this.props.history.push('/');
      }
    } catch (error) {
      throw error;
    }
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Register</h1>
            <form>
              <input
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <input
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />

            </form>
            <button onClick={this.handleRegister}>Register</button>
          </div>
        </section>
      </main>

    )
  }

}
