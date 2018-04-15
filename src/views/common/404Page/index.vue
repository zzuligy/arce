<template>
    <div id="not-found-page">
        <div class="content">
            <!--<div class="status">404</div>-->
            <div class="authority-text">页面不存在</div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less">
    #not-found-page {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            width: 500px;
            height: 500px;
            .status {
                font-size: 96px;
                margin-top: 100px;
                margin-bottom: 50px;
                text-align: center;
            }
            .authority-text {
                font-size: 36px;
                text-align: center;
            }
        }
    }

</style>