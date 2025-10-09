import NavLabelElement from '../../utilitified_decorations/NavigatingElement'
import { NavigationName, type Navigation } from "../../utilitified_decorations/HeaderRight";

export const replacement: Navigation = {};
replacement[NavigationName.ProjectName] = await NavLabelElement({children: "Add New Project", active: true})
