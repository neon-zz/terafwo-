function createPlayerInputs(){

    const count =
        Number(
            document.getElementById(
                "playerCount"
            ).value
        );

    const area =
        document.getElementById(
            "playerInputs"
        );

    area.innerHTML = "";

    for(
        let i = 0;
        i < count;
        i++
    ){

        area.innerHTML += `

        <div class="panel">

            <h3>
                プレイヤー${i+1}
            </h3>

            名前

            <input
                id="name${i}"
                placeholder="名前">

            <br><br>

            TR

            <input
                type="number"
                id="tr${i}"
                value="0">

            <br><br>

            称号

            <input
                type="number"
                id="title${i}"
                value="0">

            <br><br>

            褒賞

            <input
                type="number"
                id="award${i}"
                value="0">

            <br><br>

            ゲーム盤

            <input
                type="number"
                id="board${i}"
                value="0">

            <br><br>

            カード

            <input
                type="number"
                id="card${i}"
                value="0">

        </div>

        `;
    }
}

function calculateScores(){

    const count =
        Number(
            document.getElementById(
                "playerCount"
            ).value
        );

    const scores = [];

    for(
        let i = 0;
        i < count;
        i++
    ){

        const name =
            document.getElementById(
                `name${i}`
            ).value

            ||

            `プレイヤー${i+1}`;

        const tr =
            Number(
                document.getElementById(
                    `tr${i}`
                ).value
            );

        const title =
            Number(
                document.getElementById(
                    `title${i}`
                ).value
            );

        const award =
            Number(
                document.getElementById(
                    `award${i}`
                ).value
            );

        const board =
            Number(
                document.getElementById(
                    `board${i}`
                ).value
            );

        const card =
            Number(
                document.getElementById(
                    `card${i}`
                ).value
            );

        scores.push({

            name,

            total:
                tr
                + title
                + award
                + board
                + card
        });
    }

    scores.sort(
        (a,b)=>
        b.total-a.total
    );

    const results =
        document.getElementById(
            "results"
        );

    results.innerHTML =
        "<h2>順位</h2>";

    scores.forEach(
        (player,index)=>{

        let medal = "";

        if(index===0){
            medal = "🥇";
        }
        else if(index===1){
            medal = "🥈";
        }
        else if(index===2){
            medal = "🥉";
        }

        results.innerHTML += `

        <h3>

        ${medal}

        ${index+1}位

        ${player.name}

        :

        ${player.total}点

        </h3>

        `;
    });
}

window.onload =
function(){

    createPlayerInputs();
};