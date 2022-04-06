export class Post {
    
    postTitle: string;  
    postContent: string;  
    loveIts: number = 0;  
    created_at: Date;
  
    constructor(titre: string, contenu: string) {
      this.postTitle = titre;
      this.postContent = contenu;
      this.created_at = new Date();
    }
  
    public getDateCreation() {
      return this.created_at;
    }
  }