import { LenderFields } from "lib/types";

const generateQuestionType = (field: string) => {
    switch (field) {
        case 'email':
            return 'email';
        case 'date_of_birth':
            return 'date';
        case 'gender':
            return 'select';
        case 'monthly_income':
            return 'number';
        default:
            return 'text';
    }
};

export const LenderGetExtendedArray = (lenderArray: Array<LenderFields>) => {
    return lenderArray.map((field: any) => {
        const questionType = generateQuestionType(field);
        return Object.assign({
            name: field,
            type: questionType,
            required: false,
        });
    });
}