import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IBook } from '../utils/interfaces';
import { json } from '../utils/api';

interface DetailsState {
  book: IBook
}
interface DetailsProps extends RouteComponentProps<{ bookid: string }> { }


export default class Details extends React.Component<DetailsProps, DetailsState> {
  constructor(props: DetailsProps) {
    super(props)
    this.state = {
      book: null
    };
  }

  async componentDidMount() {
    try {
      const book = await json(`/api/books/${this.props.match.params.bookid}`, 'GET');
      this.setState({ book });
    } catch (error) {
      throw error;
    }
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Details</h1>
            <section>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{this.state.book?.title}</h5>
                        <h6>{this.state.book?.author}</h6>
                        <p>{this.state.book?.name}</p>
                        <p>${this.state.book?.price}</p>
                      </div>
                    </div>
                  </section>
          </div>
        </section>
      </main>

    )
  }

}
