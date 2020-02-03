var v_outside = "M 5 5 l 30 90 30 -90"
var v_inside = "M 20 5 l 15 50 15 -50"
var thumb_out_r = "M 5 65 h 20"
var thumb_out_l = "M 45 65 h 20"
var thumb_in_r = "M 10 85 l 55 -30"
var thumb_in_l = "M 5 55 l 55 30"
var pointer_r = "M 35 5 v 90 m -15 -5 l 30 -25"
var pointer_l = "M 35 5 v 90 m 15 -5 l -30 -25"

var draw = SVG()
function make_path(path_str) {

  return draw.path(path_str).fill("none").stroke({width: "4", color: "black"})
}

var v_outside_path = make_path(v_outside)
var v_inside_path = make_path(v_inside)
var thumb_out_r_path = make_path(thumb_out_r)
var thumb_out_l_path = make_path(thumb_out_l)

var right_hand5 = draw.group().add(v_outside_path).add(v_inside_path).add(thumb_out_r_path)

var left_hand5 = draw.group().add(v_outside_path).add(v_inside_path).add(thumb_out_l_path)

var right = {hand5: right_hand5}
var left = {hand5: left_hand5}