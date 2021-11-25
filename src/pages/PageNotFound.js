import classes from "./PageNotFound.module.css";
export default function PageNotFound() {
  return (
    <img
      className={classes.image}
      src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
      alt="Page not Found"
    />
  );
}
