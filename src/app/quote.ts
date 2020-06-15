export class Quote {
    showDescription: boolean;
    constructor (
        public name: string,
        public Author: string,
        public quote: string,
        public upvote: number,
        public downvote: number,
        public completeDate: Date,
    ) { 
        this.showDescription = false;
     }
}

