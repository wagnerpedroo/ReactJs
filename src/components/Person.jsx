import PropTypes from 'prop-types'

function Person({picture, name, age, job}) {
  return (
    <div>
      <h1>My person component</h1>
      <img src={picture} alt={name} />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

Person.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string,
  age: PropTypes.number,
  job: PropTypes.string
}

Person.defaultProps = {
  picture: 'Você não informou uma imagem',
  name: 'sem nome',
  age: 0,
  job: 'sem profissão'
}

export default Person;
