export interface Users {
    id: number;
	firstName: string;
    lastName: string;
	email: string;
	gender: string;
	zip: number;
	birthdate: string;
	city: string;
}

export interface ContextType {
	dragIndex: number | undefined;
	setDragIndex: (index: number) => void;
	dropIndex: number | undefined;
	setDropIndex: (index: number) => void;
}