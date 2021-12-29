<x-base-layout>


<link href="{{ url('assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css"/>
<script src="{{ url('assets/plugins/global/plugins.bundle.js') }}"></script>
  
<script>
var myDropzone = new Dropzone("#kt_dropzonejs_example_1", {
    url: "{{ url('/knowledge/vocabulary/images-upload') }}", // Set the url for your upload script location
    paramName: "file", // The name that will be used to transfer the file
    maxFiles: 10,
    maxFilesize: 10, // MB
    addRemoveLinks: true,
    accept: function(file, done) {
        if (file.name == "wow.jpg") {
            done("Naha, you don't.");
        } else {
            done();
        }
    }
});


// Define form element
const form = document.getElementById('kt_docs_formvalidation_text');

// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
var validator = FormValidation.formValidation(
    form,
    {
        fields: {
            'text_input': {
                validators: {
                    notEmpty: {
                        message: 'Text input is required'
                    }
                }
            },
        },

        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
);

// Submit button handler
const submitButton = document.getElementById('kt_docs_formvalidation_text_submit');
submitButton.addEventListener('click', function (e) {
    // Prevent default button action
    e.preventDefault();

    // Validate form before submit
    if (validator) {
        validator.validate().then(function (status) {
            console.log('validated!');

            if (status == 'Valid') {
                // Show loading indication
                submitButton.setAttribute('data-kt-indicator', 'on');

                // Disable button to avoid multiple click
                submitButton.disabled = true;

                // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                setTimeout(function () {
                    // Remove loading indication
                    submitButton.removeAttribute('data-kt-indicator');

                    // Enable button
                    submitButton.disabled = false;

                    // Show popup confirmation
                    Swal.fire({
                        text: "Form has been successfully submitted!",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    });

                    //form.submit(); // Submit form
                }, 2000);
            }
        });
    }
});

</script>
<div class="card mb-5 mb-xl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Thêm từ vựng</span>
        </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-3">

    <!--begin::Form-->
    <form class="form" action="#" id="kt_docs_formvalidation_text" autocomplete="off">
        
        <div class="fv-row mb-6">
            <label class="required fw-bold fs-6 mb-2">Từ vựng</label>
            <input type="text" name="text_input" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
        </div>
        <div class="fv-row mb-6">
            <label class="required fw-bold fs-6 mb-2">Phát âm</label>
            <input type="text" name="text_input" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
        </div>
        <div class="fv-row mb-6">
            <label class="required fw-bold fs-6 mb-2">Phát âm MP3:</label>
            <div class="col-lg-10">
                <div class="dropzone dropzone-queue mb-2" id="kt_dropzonejs_example_2">
                    <div class="dropzone-panel mb-lg-0 mb-2">
                        <a class="dropzone-select btn btn-sm btn-primary me-2">Đính kèm file</a>
                        <a class="dropzone-upload btn btn-sm btn-light-primary me-2">Tải lên toàn bộ</a>
                        <a class="dropzone-remove-all btn btn-sm btn-light-primary">Xóa toàn bộ</a>
                    </div>
                </div>
                <span class="form-text text-muted">Kích thước lớn nhất là 1MB.</span>
            </div>
        </div>
        <div class="fv-row mb-10">
            <label class="required fw-bold fs-6 mb-2">Hình ảnh</label>
            <div class="fv-row">
                <div class="dropzone" id="kt_dropzonejs_example_1">
                    <!--begin::Message-->
                    <div class="dz-message needsclick">
                        <!--begin::Icon-->
                        <i class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                        <!--end::Icon-->

                        <!--begin::Info-->
                        <div class="ms-4">
                            <h3 class="fs-5 fw-bolder text-gray-900 mb-1">Drop files here or click to upload.</h3>
                            <span class="fs-7 fw-bold text-gray-400">Upload up to 10 files</span>
                        </div>
                        <!--end::Info-->
                    </div>
                </div>
            </div>
        </div>
        <div class="fv-row mb-6">
            <label class="form-label">Giải nghĩa</label>
            <textarea class="form-control" id="kt_docs_maxlength_textarea" maxlength="20" placeholder="" rows="6"></textarea>
            <span class="fs-6 text-muted">Giải nghĩa và ví dụ</span>
        </div>
        <div class="fv-row mb-10">
            <button id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary">
                <span class="indicator-label">
                    Thêm mới
                </span>
                <span class="indicator-progress">
                    Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
            </button>
        </div>
    </form>
    </div>
</div>

</x-base-layout>