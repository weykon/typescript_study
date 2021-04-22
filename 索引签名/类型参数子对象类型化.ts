export namespace 类型参数子对象类型化 {
    function newLine(lineData: Sentences[number]["lines"][number]) { }
    type Sentences = {
        mp3_name: string;
        lines: {
            text: string;
            line_box: {
                x: number;
                y: number;
            }[];
        }[];
    }[]
}