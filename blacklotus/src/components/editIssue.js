import './styles/issue.css'
import 'react-quill/dist/quill.snow.css'; // Importa los estilos CSS de Quill
import Subject from './subject'
import Description from './description'
import Attachments from './attachments';


function EditIssue() {

return (
  <div>
    <div>
        <Subject/>
        <hr />
        <Description/>
        <hr/>
        <Attachments/>
    </div>
  </div>
);
}

export default EditIssue;
