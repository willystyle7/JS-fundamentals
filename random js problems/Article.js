class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        } else if (this.creator === username) {
            throw new Error("You can't like your own articles!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        }
        const index = this._likes.indexOf(username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id = undefined) {
        const existId = this._comments.filter((c) => c.id === id)[0];
        if (id === undefined || existId === undefined) {
            const newId = this._comments.length + 1;
            this._comments.push({
                id: newId,
                username,
                content,
                replies: [],
            });
            return `${username} commented on ${this.title}`;
        }
        const idReply = `${id}.${existId.replies.length + 1}`;
        existId.replies.push({
            id: idReply,
            username,
            content,
        });
        return 'You replied successfully';
    }

    toString(sortingType) {
        let output = `Title: ${this.title}\n`;
        output += `Creator: ${this.creator}\n`;
        output += `Likes: ${this._likes.length}\nComments:`;
        this._comments.sort(this.sortBy(sortingType)).forEach((com) => {
            let allReplies = [];
            output += `\n-- ${com.id}. ${com.username}: ${com.content}`;
            if (com.replies.length > 0) {
                output += '\n';
            }
            com.replies.sort(this.sortBy(sortingType)).forEach((rep) => {
                allReplies.push(`--- ${rep.id}. ${rep.username}: ${rep.content}`);
            });
            output += allReplies.join('\n');
        });
        return output;
    }

    sortBy(type) {
        if (type === 'asc') {
            return (a, b) => a.id - b.id;
        } else if (type === 'desc') {
            return (a, b) => b.id - a.id;
        }
        return (a, b) => a.username.localeCompare(b.username);
    }
}
