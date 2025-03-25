import styles from './tag.module.css';

export default function Tag({state}) {
  const getClass = () => {
    switch (state) { //that needs to be changed
      case "Active":
        return styles.active;
      case "pendiente":
        return styles.pendiente;
      case "inactive":
        return styles.inactivo;
      default:
        return "active"; // Default case if `estado` doesn't match any expected values
    }
  };
  
  return (<div> <p className={`${styles.tag} ${getClass()}`}> {state}</p> </div>);
}
