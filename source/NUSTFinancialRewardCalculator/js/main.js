$("#calculateReward").click(() => {
  const tj = parseFloat($("#totalJournalsInCategory").val());
  const pj = parseFloat($("#journalPositionInCategory").val());
  const vb = parseFloat($("#valueForBase").val());
  const rq1 = parseFloat($("#rewardForQ1").val());
  const rq2 = parseFloat($("#rewardForQ2").val());
  const rq3 = parseFloat($("#rewardForQ3").val());

  const reward1 = vb + ((tj - pj) / (tj - 1)) * rq1;
  const reward2 = vb + ((tj - pj) / (tj - 1)) * rq2;
  const reward3 = vb + ((tj - pj) / (tj - 1)) * rq3;

  $("#reward1").html(`R1 = ${reward1}`);
  $("#reward2").html(`R2 = ${reward2}`);
  $("#reward3").html(`R3 = ${reward3}`);

  $("#formulaForReward1").html(`R1 = ${vb} + ((${tj} - ${pj})/(${tj} - 1)) * ${rq1}`);
  $("#formulaForReward2").html(`R2 = ${vb} + ((${tj} - ${pj})/(${tj} - 1)) * ${rq2}`);
  $("#formulaForReward3").html(`R3 = ${vb} + ((${tj} - ${pj})/(${tj} - 1)) * ${rq3}`);
});

$("#copyReward1").click(async () => {
  const value = $("#reward1").select().html();
  await navigator.clipboard.writeText(value);
});

$("#copyReward2").click(async () => {
  const value = $("#reward2").select().html();
  await navigator.clipboard.writeText(value);
});

$("#copyReward3").click(async () => {
  const value = $("#reward3").select().html();
  await navigator.clipboard.writeText(value);
});
