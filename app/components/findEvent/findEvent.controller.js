export class FindEventController {
}
$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};

function findVal() {
    $scope.findVal = service.market.getall()
    .then(function(results) {
        $scope.data = data;
        console.log($scope.data);
    })
}