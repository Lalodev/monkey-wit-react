import CustomInput from './CustomInput';
import FormTitle from './FormTitle';

const CustomForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form action="">
        <FormTitle>
          <span style={{ color: 'green' }}>Formulario</span>
        </FormTitle>
        <CustomInput label="Nombre" placeholder="Digite su nombre" />
        <CustomInput label="Edad" placeholder="Digite su edad" />
        <CustomInput
          label="Nacionalidad"
          placeholder="Digite su nacionalidad"
        />
      </form>
    </div>
  );
};

export default CustomForm;
