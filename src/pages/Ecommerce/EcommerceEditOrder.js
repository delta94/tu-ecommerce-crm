import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Label,
} from "reactstrap"; 
import Breadcrumbs from "../../components/Common/Breadcrumb";
import * as firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";
// Rating Plugin
import RatingTooltip from "react-rating-tooltip";

class  EcommerceEditOrder extends Component {




render() {


  let catego = [];
  firebase.database().ref("data/category").on("child_added", (snap) => {
    catego.push(snap.val());

  });
  let flavors = [];
  firebase.database().ref("data/flavor").on("child_added", (snap) => {
    flavors.push(snap.val());
  });

  return (

    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Resumen" linktitle="/resumen" breadcrumbItem="Editar Orden de Compra" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <CardTitle>Edición Orden de Compra  id:</CardTitle>
                  <CardSubtitle className="mb-3">
                    Completar toda la información requerida
                  </CardSubtitle>

                  <Form>
                    <Row>
                      <Col sm="6">
                        <FormGroup>
                          <Label htmlFor="productname">Nombre del Producto</Label>
                          <Input
                            id="title"
                            name="title"
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="dicount">
                            Descuento %
                          </Label>
                          <Input
                            id="discount"
                            name="discount"
                            type="text"
                            className="form-control"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="rating">
                          Rating
                          </Label>

                            <RatingTooltip
                              max={5}
                              onChange={(rate) => { this.setDef(rate) } }
                              ActiveComponent={
                                <i
                                  key={"active_1"}
                                  className="mdi mdi-star text-primary"
                                  style={this.starStyle}
                                />
                              }
                              InActiveComponent={
                                <i
                                  key={"active_01"}
                                  className="mdi mdi-star-outline text-muted"
                                  style={this.starStyle}
                                />
                              }
                            />

                          <Input
                            id="rating"
                            name="rating"
                            type="text"
                            className="form-control"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="price">Precio</Label>
                          <Input
                            id="price"
                            name="price"
                            type="text"
                            className="form-control"
                              onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col sm="6">

                        <FormGroup>
                        <Label htmlFor="text">
                        Categoría
                        </Label>
                        {
                        /**
                         <Select  options={catego}  value={this.state.category} onChange={this.onSelectCategoryChange} />
                         **/
                       }
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="text">
                            Ingredientes
                          </Label>
                          {
                          /**
                          <Select options={flavors}  value={this.state.flavors} onChange={this.onSelectFlavorsChange}/>
                          **/
                        }
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="text">
                            Descripción Producto
                          </Label>
                          <textarea
                            className="form-control"
                            id="text"
                            name="text"
                            rows="5"
                            onChange={this.handleChange}
                          ></textarea>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Button
                      type="submit"
                      color="primary"
                      className="mr-1 waves-effect waves-light"
                    >
                      Guardar Cambios
                    </Button>
                    <Link to="/resumen">
                    <Button
                      type="button"
                      color="secondary"
                      className="waves-effect"
                    >
                      Volver
                    </Button>
                    </Link>
                  </Form>
                </CardBody>
              </Card>


            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
};
export default EcommerceEditOrder;
