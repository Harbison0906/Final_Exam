import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../utils/api';
import { IBook } from '../utils/interfaces';

interface HomeState {
  books: IBook[]
}
interface HomeProps extends RouteComponentProps {}


export default class Home extends React.Component <HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props)
    this.state = {
      books: []
    };
  }

  async componentDidMount() {
    const books = await json('/api/books', 'GET',);
    this.setState({books});
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Home View</h1>
            <>
              {this.state.books.map(book => {
                return (
                  <section>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <h6>{book.author}</h6>
                        <p>{book.name}</p>
                        <p>${book.price}</p>
                      </div>
                    </div>
                  </section>
                )
              })}
            </>
          </div>
        </section>
      </main>

    )
  }

}
