import React from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer
} from "mdbreact"

export const Weather = props => {
  return (
    <MDBContainer>
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src="" waves />
          <MDBCardBody>
            <MDBCardTitle>{props.city}</MDBCardTitle>

            <MDBCardText>{props.country}</MDBCardText>
            <MDBCardText>{props.temperature}</MDBCardText>
            <MDBCardText>{props.description}</MDBCardText>
            <MDBCardText>{props.humidity}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  )
}

export default Weather
