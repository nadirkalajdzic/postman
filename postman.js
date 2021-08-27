// ass 3
var board_num = pm.environment.get("board_num");
board_num ? board_num++ : (board_num = 1);
pm.environment.set("board_num", board_num);
pm.environment.set("board_name", `My board ${board_num}`);
