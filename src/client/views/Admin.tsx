import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../utils/api';
import { IBook } from '../utils/interfaces';

interface AdminState {
  title: string,
  author: string,
  categoryid: string,
  price: number | string
}
interface AdminProps extends RouteComponentProps <{bookid: string}>{}


export default class Admin extends React.Component<AdminProps, AdminState> {
  constructor(props: AdminProps) {
    super(props)
    this.state = {
      title: '',
      author: '',
      categoryid: '',
      price: null
    };
  }

  async componentDidMount() {
    if (!User || User.userid === null || User.role !== 'admin') {
      this.props.history.push('/login')
    } else {
      const book = await json<IBook>(`/api/books/${this.props.match.params.bookid}`)
      this.setState({title: this.state.title, author: this.state.author, categoryid: this.state.categoryid, price: this.state.price})
    }
  }

  editBook = (e: React.MouseEvent<HTMLButtonElement>) => {
    const details = { title: this.state.title, author: this.state.author, categoryid: this.state.categoryid, price: this.state.price }
    json(`/api/books/${this.props.match.params.bookid}`, 'PUT', details)
    .then(details => {
      console.log(details);
      this.props.history.push(`/details/${this.props.match.params.bookid}`);
    })
  }

  deleteBook = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    json(`/api/books/${this.props.match.params.bookid}`, 'DELETE')
    .then(details => {
      console.log(details);
      this.props.history.push('/');
    })

  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Admin</h1>
            <form>
              <input
              placeholder='Title'
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
              <input
              placeholder='Author'
                value={this.state.author}
                onChange={e => this.setState({ author: e.target.value })}
              />
              <input
              placeholder='Category ID'
                value={this.state.categoryid}
                onChange={e => this.setState({ categoryid: e.target.value })}
              />
              <input
              placeholder='Price'
                value={this.state.price}
                onChange={e => this.setState({ price: e.target.value })}
              />
            </form>
            <button onClick={this.editBook}>Edit Book</button>
            <button onClick={this.deleteBook}>Delete Book</button>
          </div>
        </section>
      </main>

    )
  }

}
