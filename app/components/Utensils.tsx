export function Utensils() {
  return (
    <div className="utensils" aria-hidden="true">
      <div className="utensil fork">
        <div className="fork-head"><i /><i /><i /><i /></div>
        <div className="utensil-neck" />
        <div className="utensil-handle" />
      </div>
      <div className="utensil knife">
        <div className="knife-blade" />
        <div className="utensil-handle blue-handle" />
      </div>
      <div className="utensil spoon">
        <div className="spoon-bowl" />
        <div className="utensil-neck" />
        <div className="utensil-handle" />
      </div>
    </div>
  );
}
