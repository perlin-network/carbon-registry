import { useConnection } from '../../Context/ConnectionContext/connectionContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useUserContext } from '../../Context/UserInformationContext/userInformationContext';
import { ProgrammeCreationComponent } from '@undp/carbon-library';

const AddNewProgrammeUndp = () => {
  const navigate = useNavigate();
  const translator = useTranslation(['addProgramme', 'common']);

  const onNavigateToProgrammeView = () => {
    navigate('/programme/viewAll', { replace: true });
  };

  return (
    <ProgrammeCreationComponent
      onNavigateToProgrammeView={onNavigateToProgrammeView}
      useUserContext={useUserContext}
      useConnection={useConnection}
      useLocation={useLocation}
      translator={translator}
    ></ProgrammeCreationComponent>
  );
};

export default AddNewProgrammeUndp;
