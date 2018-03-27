import Header from '../components/Header'

export default ({ children, settings = {} }) => (
  <div>
    <div className="util__container">
      {children}
    </div>
  </div>
)