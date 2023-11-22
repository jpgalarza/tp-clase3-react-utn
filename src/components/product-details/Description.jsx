import parse from 'html-react-parser'; //Quizás no se la forma correcta, pero como no hay back, así me fue simple

export const Description = ({ descriptionText }) => {
  return (
    <section className="description">
      <h2>Descripción</h2>
        {parse(descriptionText)}
    </section>
  )
}
