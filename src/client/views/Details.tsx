import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface DetailsState {}
interface DetailsProps extends RouteComponentProps {}


export default class Details extends React.Component <DetailsProps, DetailsState> {
  constructor(props: DetailsProps) {
    super(props)
    this.state = {};
  }

  async componentDidMount() {
    // const books = await json();
    // this.setState({});
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Details View</h1>
          </div>
        </section>
      </main>

    )
  }

}
