import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">테스뀨 </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
