import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



class Move extends React.Component {


  


    render() {
        return (
            <>
                <h3>Movies about {this.props.locationName} city!</h3>

                <CardColumns>


                    {this.props.cityMovies.map((item) => {

                        return (

                            <Card style={{ width: '14rem' }} >
                                <Card.Body>
                                    <Card.Title>Title : {item.title}</Card.Title>

                                </Card.Body>
                                <hr />

                                {item.imageUrl &&
                                    <Card.Img
                                        src={`${item.imageUrl}`}
                                    />
                                }
                                <Card.Body>
                                    <Card.Text>

                                        Overview : {item.overview}
                                        <br />
                                         Average Votes : {item.averageVotes}
                                        <br />
                                        Total Votes : {item.totalVotes}
                                        <br />
                                        Popularity : {item.popularity}
                                        <br />
                                        ReleasedOn : {item.releasedOn}
                                        <br />

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )

                    })}

                </CardColumns>

            </>
        )
    }
}

export default Move;