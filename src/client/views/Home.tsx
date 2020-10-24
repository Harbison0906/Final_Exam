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

              }}
            </>
          </div>
        </section>
      </main>

    )
  }

}
