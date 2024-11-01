import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p>{ErrorPage.statusText || error.message}</p>
            {
                error.status ===   404 && <div>
                    <h3>not found</h3>
                </div>
            }
        </div>
    );
};

export default ErrorPage;