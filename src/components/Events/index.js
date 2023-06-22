import { useState } from 'react';
import ProjectCard from '../ProjectCard/index';
import Select from '../Select/index';
import { useData } from '../../containers/context/index';
import Modal from '../../containers/Modal/Modal';
import ModalProject from '../../containers/ModalProject/index';

import './style.scss';

const PER_PAGE = 9;

const ProjectList = () => {
  const { data, error } = useData();
  const [type, setType] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProjects = (
    (!type
      ? data?.projects
      : data?.projects.filter(project => project.type === type)) || []
  ).filter((project, index) => {
    if (
      (currentPage - 1) * PER_PAGE <= index &&
      PER_PAGE * currentPage > index
    ) {
      return true;
    }
    return false;
  });
  const changeType = pType => {
    setCurrentPage(1);
    setType(pType);
  };
  const pageNumber = Math.floor((filteredProjects?.length || 0) / PER_PAGE) + 1;
  const typeList = new Set(data?.projects.map(project => project.type));
  return (
    <>
      {error && <div>An error occured</div>}
      {data === null ? (
        'loading'
      ) : (
        <>
          <Select
            selection={Array.from(typeList)}
            onChange={value => (value ? changeType(value) : changeType(null))}
          />
          <div id="events" className="ListContainer">
            {filteredProjects.map(project => (
              <Modal
                key={project.id}
                Content={<ModalProject project={project} />}
              >
                {({ setIsOpened }) => (
                  <ProjectCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={project.cover}
                    title={project.title}
                    link={project.link}
                    date={new Date(project.date)}
                    label={project.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {[...Array(pageNumber || 0)].map((_, n) => (
              // eslint-disable-next-line react/no-array-index-key
              <a key={n} href="#events" onClick={() => setCurrentPage(n + 1)}>
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectList;
