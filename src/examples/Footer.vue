<template>
  <footer class="pb-4 footer">
    <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-12 mb-lg-0 mb-12">
                <div class="copyright text-center text-sm text-muted text-lg-left">
                ©
            {{ new Date().getFullYear() }} Designed par <a style="color: #252f40;" href="https://tresor.gouv.ci/" class="font-weight-bold ml-1"
                        target="_blank">Trésor Public</a>
                </div>
            </div>
            
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
