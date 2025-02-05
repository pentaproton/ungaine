// マスを定義
const platforms = [
    { id: 0, type: 12, right: 1, down: 11, x: 0, y: 0 },
    { id: 1, type: 8, right: 2, left: 0, x: 1, y: 0 },
    { id: 2, type: 3, right: 3, left: 1, x: 2, y: 0 },
    { id: 3, type: 5, down: 4, left: 2, x: 3, y: 0 },
    { id: 4, type: 9, top: 3, down: 5, x: 3, y: 1 },
    { id: 5, type: 10, top: 4, right: 12, left: 6, x: 3, y: 2 },
    { id: 6, type: 0, right: 5, down: 7, x: 2, y: 2 },
    { id: 7, type: 3, top: 6, left: 8, down: 55, x: 2, y: 3 },
    { id: 8, type: 9, right: 7, left: 9, x: 1, y: 3 },
    { id: 9, type: 2, right: 8, top: 10, x: 0, y: 3 },
    { id: 10, type: 10, top: 11, down: 9, x: 0, y: 2 },
    { id: 11, type: 6, top: 0, down: 10, x: 0, y: 1 },
    { id: 12, type: 7, left: 5, right: 13, x: 4, y: 2 },
    { id: 13, type: 5, left: 12, right: 14, x: 5, y: 2 },
    { id: 14, type: 11, top: 25, left: 13, right: 15, x: 6, y: 2 },
    { id: 15, type: 0, left: 14, down: 16, x: 7, y: 2 },
    { id: 16, type: 2, top: 15, down: 26, right: 17, x: 7, y: 3 },
    { id: 17, type: 9, left: 16, right: 18, x: 8, y: 3 },
    { id: 18, type: 11, left: 17, top: 19, x: 9, y: 3 },
    { id: 19, type: 7, top: 20, down: 18, x: 9, y: 2 },
    { id: 20, type: 5, top: 21, down: 19, x: 9, y: 1 },
    { id: 21, type: 1, left: 22, down: 20, x: 9, y: 0 },
    { id: 22, type: 10, left: 23, right: 21, x: 8, y: 0 },
    { id: 23, type: 6, left: 24, right: 22, x: 7, y: 0 },
    { id: 24, type: 4, down: 25, right: 23, x: 6, y: 0 },
    { id: 25, type: 8, top: 24, down: 14, x: 6, y: 1 },
    { id: 26, type: 8, top: 16, down: 27, x: 7, y: 4 },
    { id: 27, type: 4, top: 26, down: 28, x: 7, y: 5 },
    { id: 28, type: 3, top: 27, down: 39, right: 29, x: 7, y: 6 },
    { id: 29, type: 9, left: 28, right: 30, x: 8, y: 6 },
    { id: 30, type: 2, left: 29, down: 31, x: 9, y: 6 },
    { id: 31, type: 10, top: 30, down: 32, x: 9, y: 7 },
    { id: 32, type: 6, top: 31, down: 33, x: 9, y: 8 },
    { id: 33, type: 12, top: 32, left: 34, x: 9, y: 9 },
    { id: 34, type: 8, right: 33, left: 35, x: 8, y: 9 },
    { id: 35, type: 3, right: 34, left: 36, x: 7, y: 9 },
    { id: 36, type: 5, right: 35, top: 37, x: 6, y: 9 },
    { id: 37, type: 9, down: 36, top: 38, x: 6, y: 8 },
    { id: 38, type: 10, down: 37, right: 39, left: 40, x: 6, y: 7 },
    { id: 39, type: 0, left: 38, top: 28, x: 7, y: 7 },
    { id: 40, type: 7, right: 38, left: 41, x: 5, y: 7 },
    { id: 41, type: 5, right: 40, left: 42, x: 4, y: 7 },
    { id: 42, type: 11, right: 41, left: 43, down: 45, x: 3, y: 7 },
    { id: 43, type: 0, right: 42, top: 44, x: 2, y: 7 },
    { id: 44, type: 2, down: 43, left: 53, top: 54, x: 2, y: 6 },
    { id: 45, type: 8, down: 46, top: 42, x: 3, y: 8 },
    { id: 46, type: 4, left: 47, top: 45, x: 3, y: 9 },
    { id: 47, type: 6, right: 46, left: 48, x: 2, y: 9 },
    { id: 48, type: 10, right: 47, left: 49, x: 1, y: 9 },
    { id: 49, type: 1, right: 48, top: 50, x: 0, y: 9 },
    { id: 50, type: 5, down: 49, top: 51, x: 0, y: 8 },
    { id: 51, type: 7, down: 50, top: 52, x: 0, y: 7 },
    { id: 52, type: 11, down: 51, right: 53, x: 0, y: 6 },
    { id: 53, type: 9, left: 52, right: 44, x: 1, y: 6 },
    { id: 54, type: 8, down: 44, top: 55, x: 2, y: 5 },
    { id: 55, type: 4, down: 54, top: 7, x: 2, y: 4 },
];
// 表示するときの間隔
const platformInterval = 45;

window.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.style.position = "relative";
    document.body.appendChild(container);

    // 選択してるマス
    let selectedCircleEl = null;
    // 計算したかどうか
    let isCalculated = false;

    platforms.forEach((platform) => {
        const circle = document.createElement("div");
        circle.innerText = platform.type;
        circle.style.position = "absolute";
        circle.style.left = platform.x * platformInterval + "px";
        circle.style.top = platform.y * platformInterval + "px";
        circle.style.width = "40px";
        circle.style.height = "40px";
        circle.style.lineHeight = "40px";
        circle.style.textAlign = "center";
        circle.style.border = "2px solid #000";
        circle.style.borderRadius = "50%";
        circle.dataset.platformId = platform.id; // idを保存

        circle.addEventListener("click", () => {
            if (selectedCircleEl) {
                selectedCircleEl.style.backgroundColor = "";
            }
            circle.style.backgroundColor = "red";
            selectedCircleEl = circle;
        });
        container.appendChild(circle);
    });

    // 「行けないマス」の選択肢（上下左右）
    const directions = ["top", "down", "left", "right"];
    let selectedDirectionEl = null;
    const directionContainer = document.createElement("div");
    directionContainer.style.position = "absolute";
    directionContainer.style.bottom = "20px";
    directionContainer.style.left = "50%";
    directionContainer.style.transform = "translateX(-50%)";
    directionContainer.style.display = "flex";
    directionContainer.style.justifyContent = "center";

    // 行けるマス数を指定する入力ボックスと計算ボタン
    const inputContainer = document.createElement("div");
    inputContainer.style.position = "absolute"; // 絶対配置にする
    inputContainer.style.bottom = "60px"; // 高さを調整する
    inputContainer.style.left = "50%"; // 水平方向の中央に配置する
    inputContainer.style.transform = "translateX(-50%)"; // 水平方向の中央に配置する
    inputContainer.style.display = "flex";
    inputContainer.style.justifyContent = "center";
    inputContainer.style.marginBottom = "10px";

    // create range slider
    const rangeSlider = document.createElement("input");
    rangeSlider.type = "range";
    rangeSlider.min = "1";
    rangeSlider.max = "50";
    rangeSlider.value = "1";
    rangeSlider.style.marginRight = "10px";

    rangeSlider.addEventListener("input", () => {
        inputBox.value = rangeSlider.value;
        runCalculation();
    });

    const inputBox = document.createElement("input");
    inputBox.type = "number";
    inputBox.placeholder = "行けるマス数";
    inputBox.style.marginRight = "10px";

    inputBox.addEventListener("input", () => {
        const val = parseInt(inputBox.value, 10);
        if (!isNaN(val) && val >= 1 && val <= 50) {
            rangeSlider.value = val;
        }
        runCalculation();
    });

    // wrap the calculation logic in a function
    function runCalculation() {
        const steps = parseInt(inputBox.value, 10);
        if (isNaN(steps) || steps < 0) {
            alert("0以上の有効なマス数を入力してください");
            return;
        } else if (steps > 50) {
            alert("イキスギィ！！！");
            return;
        } else if (selectedCircleEl === null) {
            alert("マスを選択してください");
            return;
        }

        const startPlatformId = parseInt(selectedCircleEl.dataset.platformId, 10);
        console.log('開始プラットフォーム:', startPlatformId);
        isCalculated = true;
        reachablePlatformIds = [];
        function dfs(platformId, dist, direction){
            console.log("現在地は", platformId, "、距離は", dist);
            if (dist === steps){
                reachablePlatformIds.push(platformId);
            } else {
                const platform = platforms.find(p => p.id === platformId);
                if (!platform) return;

                if(direction !== "top" && platform.top !== undefined){
                    dfs(platform.top, dist + 1, "down");
                }
                if(direction !== "down" && platform.down !== undefined){
                    dfs(platform.down, dist + 1, "top");
                }
                if(direction !== "left" && platform.left !== undefined){
                    dfs(platform.left, dist + 1, "right");
                }
                if(direction !== "right" && platform.right !== undefined){
                    dfs(platform.right, dist + 1, "left");
                }
            }
        }
        if (selectedDirectionEl) {
            dfs(startPlatformId, 0, selectedDirectionEl.innerText);
        } else {
            dfs(startPlatformId, 0, "");
        }
        // 到達可能なマスを青くする(初期マスにも行ける時は紫に)
        platforms.forEach((platform) => {
            const circle = document.querySelector(`[data-platform-id="${platform.id}"]`);
            if (circle) {
                if (reachablePlatformIds.includes(platform.id)) {
                    if (platform.id === startPlatformId) {
                        circle.style.backgroundColor = "purple";
                    } else {
                        circle.style.backgroundColor = "blue";
                    }
                } else {
                    if (platform.id === startPlatformId) {
                        circle.style.backgroundColor = "red";
                    } else {
                        circle.style.backgroundColor = "";
                    }
                }
            }
        });
    }

    inputContainer.appendChild(inputBox);
    inputContainer.insertBefore(rangeSlider, inputBox);
    document.body.appendChild(inputContainer);

    directions.forEach((dir) => {
        const dirEl = document.createElement("div");
        dirEl.innerText = dir;
        dirEl.style.display = "inline-block";
        dirEl.style.width = "40px";
        dirEl.style.height = "40px";
        dirEl.style.lineHeight = "40px";
        dirEl.style.textAlign = "center";
        dirEl.style.border = "2px solid #000";
        dirEl.style.marginRight = "10px";
        dirEl.style.cursor = "pointer";

        dirEl.addEventListener("click", () => {
            if (selectedDirectionEl === dirEl) {
                dirEl.style.backgroundColor = "";
                selectedDirectionEl = null;
            } else {
                if (selectedDirectionEl) {
                    selectedDirectionEl.style.backgroundColor = "";
                }
                dirEl.style.backgroundColor = "red";
                selectedDirectionEl = dirEl;
            }
        });

        directionContainer.appendChild(dirEl);
    });
    document.body.appendChild(directionContainer);
});