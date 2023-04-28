import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={6} m={4}>
            <div className="project-imgbx">
                <img src={imgUrl} alt="Img" />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
};

export default ProjectCard;