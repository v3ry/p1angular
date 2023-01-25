export class Recipe {
  id!: number;
  title!: string;
  description!: string;
  story!: string;
  prepTime!: number;
  cookTime!: number;
  published!: boolean;
  created_on!: Date;
  updated_on!: Date;

  constructor(
    title: string = 'Entrer un nom...',
    description: string = '',
    story: string = '',
    prepTime: number = 0,
    cookTime: number = 0,
    published: boolean = false,
    created_on: Date = new Date(),
    updated_on: Date = new Date()
  ) {
    this.title = title;
    this.description = description;
    this.story = story;
    this.prepTime = prepTime;
    this.cookTime = cookTime;
    this.published = published;
    this.created_on = created_on;
    this.updated_on = updated_on;
  }
}
