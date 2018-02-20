import React, {Component} from 'react';
import {Modal, Header, Title, Body, Button, Thumbnail, Grid, Row, Col, Image } from 'react-bootstrap';
import PortfolioList from './portfolioList';

export default class PortfolioItems extends Component {
  constructor(props) {
		super(props);
		this.state = {
			showModal: false,
      portfolio: {
        id:"1",
        title: "TEST",
        subTitle: "TEST",
        img: "",
        gif: "",
        descriptionTitle: "TEST",
        description: "TEST",
        technologiesTitle: "TEST",
        tech1:"TEST",
        tech2:"TEST",
        tech3:"TEST",
        tech4:"TEST",
        tech5:"TEST",
        tech6:"TEST",
        tech7:"TEST",
        tech8:"TEST",
        live: "https://jolie-wholesale.herokuapp.com/",
        github: "https://github.com/coolcat-310/FashionStore"
      }

		}
	}

  selectItem = (item) => {

    this.setState({portfolio: item}, this.open)
  }

  getInitialState = () => {
    return { showModal: false };
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }
  renderList = () => {
    return PortfolioList.map((portfolio) => {
      return(
        <Col xs={6} md={4} key={portfolio.id} className="thumbnail-list">
          <Thumbnail  href="#" alt="171x180" onClick={() => this.selectItem(portfolio)} src={portfolio.img} />
          <h4 className="text-center">{portfolio.title}</h4>
        </Col>
      );
    });
  }

  renderModal = () => {
      let {portfolio} = this.state;
      return (
        <div>
          <Modal show={this.state.showModal} onHide={this.close} key={portfolio.id}>
            <Modal.Header closeButton>
              <Modal.Title>{portfolio.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="modal-subTitle">{portfolio.subTitle}</p>

              <Col xs={12}>
              <Image src={portfolio.gif} rounded responsive />
              <h4>{portfolio.descriptionTitle}</h4>
              <p>{portfolio.description1}</p>
              <p>{portfolio.description2}</p>
              <p>{portfolio.description3}</p>
              <p>{portfolio.description4}</p>

              <h4>{portfolio.technologiesTitle}</h4>
              <p>{portfolio.tech1}</p>
              <p>{portfolio.tech2}</p>
              <p>{portfolio.tech3}</p>
              <p>{portfolio.tech4}</p>
              <p>{portfolio.tech5}</p>
              <p>{portfolio.tech6}</p>
              <p>{portfolio.tech7}</p>
              <p>{portfolio.tech8}</p>
              <a href={portfolio.live} className="btn btn-default modal-btn" target="_blank"><span className="network-name">Live Link</span></a>
              <a href={portfolio.github} className="btn btn-default modal-btn" target="_blank"><span className="network-name">Github</span></a>
              </Col>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  }

  render() {
    console.log(PortfolioList[0].img)
    return(
      <div>
        <Grid>
          <Row>
          {this.renderList()}
          </Row>
        </Grid>
          {this.renderModal()}
      </div>
    );
  }
}
