import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.imageUrl} className="card-img" alt={props.location} />
                    <div className="card-imgCredits"><i className="bi bi-camera"></i>&nbsp; {props.imageCredits}</div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><small className="text-muted text-uppercase country"><i className="bi bi-geo-alt-fill text-danger"></i> {props.location}</small> <a href={props.googleMapsUrl} className="text-primary float-right"><small>View in Google Maps</small></a></p>
                        <h5 className="card-title h3">{props.title}</h5>
                        <p className="card-text"><small className="font-weight-bold text-muted date">{props.startDate} - {props.endDate}</small></p>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}