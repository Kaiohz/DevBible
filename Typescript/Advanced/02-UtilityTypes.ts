// Advanced Utility Types

// Record Type
type PageInfo = {
    title: string;
    url: string;
    content: string;
};

const pages: Record<string, PageInfo> = {
    home: { title: 'Home', url: '/', content: 'Welcome' },
    about: { title: 'About', url: '/about', content: 'About us' }
};

// Partial Type
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

// Pick and Omit
type TodoPreview = Pick<Todo, 'title' | 'completed'>;
type TodoWithoutDescription = Omit<Todo, 'description'>;

// Extract and Exclude
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;  // type T0 = 'a'
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;  // type T1 = 'c'

// ReturnType
function getData() {
    return { x: 10, y: 20 };
}
type FunctionReturn = ReturnType<typeof getData>; // { x: number, y: number }

// Parameters
type FunctionParams = Parameters<(a: string, b: number) => void>; // [string, number]

// Required and Readonly
type RequiredTodo = Required<Partial<Todo>>;
type ReadonlyTodo = Readonly<Todo>; 