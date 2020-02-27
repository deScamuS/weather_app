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
    <div>
      <MDBContainer>
        <MDBCol>
          <div className="center">
            <MDBCard
              style={{
                width: "22rem",
                background: "rgb(255,255,255,.009)",
                color: "#000"
              }}
            >
              <MDBCardImage className="img-fluid" src={""} alt="" />
              <MDBCardBody>
                <MDBCardTitle>
                  {" "}
                  {props.city} {props.country}
                </MDBCardTitle>

                <MDBCardText></MDBCardText>
                <MDBCardText>{props.temperature}</MDBCardText>
                <MDBCardText>{props.description}</MDBCardText>
                <MDBCardText>{props.humidity}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBCol>
      </MDBContainer>
    </div>
  )
}

export default Weather
