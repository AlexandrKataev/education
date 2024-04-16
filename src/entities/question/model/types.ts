type Variant = string | null;

export interface Question {
  id: number;
  title: string;
  type: 'multiplySelect' | 'singleSelect' | 'shortAnswer' | 'longAnswer';
  variants: Variant[];
}
