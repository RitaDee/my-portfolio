import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, GitHub }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a  className="card-router" target="_blank" rel="noopener noreferrer" href={link} >
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
      <div className="source">
        <button><a target="_blank" rel="noopener noreferrer" href={GitHub}>GitHub</a></button>
        <button><a target="_blank" rel="noopener noreferrer" href={link}>Live Demo</a></button>
      </div>
    </Col>
  )
}