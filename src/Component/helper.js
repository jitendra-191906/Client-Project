import { useLocation, useNavigate } from "react-router-dom";

export const useScrollToComponent = (id) => {

    const navigate = useNavigate();

    const location = useLocation();

    const { pathname } = location;

    const scrollToComponent = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        else if (pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => scrollToComponent(id), 100); 
        }
    }

    return scrollToComponent;
};