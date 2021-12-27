<x-base-layout>
<!--begin::Tables Widget 13-->
<div class="card mb-5 mb-xl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
            <span class="card-label fw-bolder fs-3 mb-1">Danh sách từ vựng</span>
            <span class="text-muted mt-1 fw-bold fs-7">{{ count($vocabularys) }} từ vựng</span>
        </h3>
        <div class="card-toolbar">
            <a class="btn btn-primary btn-sm px-4" href="{{ url('/knowledge/vocabulary/create') }}" style="display: block;">Thêm từ vựng</a>
        </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-3">
        <!--begin::Table container-->
        <div class="table-responsive">
            <!--begin::Table-->
            <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                <!--begin::Table head-->
                <thead>
                    <tr class="fw-bolder text-muted">
                        <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-13-check" />
                            </div>
                        </th>
                        <th class="min-w-150px">Từ vựng</th>
                        <th class="min-w-140px">Phát âm</th>
                        <th class="min-w-120px">Nghĩa</th>
                        <th class="min-w-120px">Số lần học </th>
                        <th class="min-w-120px">Trạng thái</th>
                        <th class="min-w-100px text-end">Hành động</th>
                    </tr>
                </thead>
                <!--end::Table head-->
                <!--begin::Table body-->
                <tbody>
                    @foreach ($vocabularys as $vocabulary)
                    <tr>
                        <td>
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input class="form-check-input widget-13-check" type="checkbox" value="1" />
                            </div>
                        </td>
                        <td>
                            <a href="{{ url('/knowledge/vocabulary/edit/' . $vocabulary->id) }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $vocabulary->vocabulary }}</a>
                        </td>
                        <td>
                            {{ $vocabulary->pronounce }}
                        </td>
                        <td>
                            {{ $vocabulary->explain }}
                        </td>
                        <td>
                            <span class="badge badge-light-success">{{ $vocabulary->view }}</span>
                        </td>
                        <td>
                            @if ($vocabulary->status == 0)
                                <span class="badge badge-light-danger">Private</span>
                            @else
                                <span class="badge badge-light-success">Public</span>
                            @endif
                        </td>
                        <td class="text-end">
                            <a href="{{ url('/knowledge/vocabulary/edit/' . $vocabulary->id) }}" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                <span class="svg-icon svg-icon-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
                                    </svg>
                                </span>
                            </a>
                            <a href="{{ url('/knowledge/vocabulary/delete/' . $vocabulary->id) }}" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                <span class="svg-icon svg-icon-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black" />
                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black" />
                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black" />
                                    </svg>
                                </span>
                            </a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
                <!--end::Table body-->
            </table>
            <!--end::Table-->
        </div>
        <!--end::Table container-->
    </div>
    <!--begin::Body-->
</div>
<!--end::Tables Widget 13-->
</x-base-layout>