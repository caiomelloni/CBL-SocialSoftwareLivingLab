"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
class DataBase {
    constructor() {
        this.data = [
            {
                title: "A",
                content: "A",
                date: new Date(),
                tag: "B",
                id: 123
            },
            {
                title: "The Rise of AI",
                content: "Artificial intelligence is transforming industries across the globe...",
                date: new Date(),
                tag: "technology",
                id: 124
            },
            {
                title: "Healthy Eating Habits",
                content: "Maintaining a balanced diet is crucial for a healthy lifestyle...",
                date: new Date(),
                tag: "health",
                id: 125
            },
            {
                title: "Top Travel Destinations",
                content: "Exploring new places can be an exciting adventure...",
                date: new Date(),
                tag: "travel",
                id: 126
            },
            {
                title: "JavaScript Tips and Tricks",
                content: "JavaScript is a versatile language used for web development...",
                date: new Date("2000/04/17"),
                tag: "coding",
                id: 127
            },
            {
                title: "JavaScript Tips and Tricks",
                content: "JavaScript is a versatile language used for web development...",
                date: new Date("2000/04/17"),
                tag: "branding",
                id: 127
            }
        ];
    }
    get articles() {
        return this.data;
    }
}
exports.DataBase = DataBase;
