<template>
    <div class="wrapper">
        <div class="container">

            <div class="card">
                <div class="card-body">
                    <div class="text-center my-40">
                        <h1>V-MSG</h1>
                        <h4>Simple notify handler component for Vue.js</h4>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <div class="form-group">
                                <button class="btn btn-primary" @click="show('top-left')">top-left</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.success('This is a notification', { position: 'top-left' });</code></pre>
                            </div>
                           <div class="form-group">
                                <button class="btn btn-primary" @click="show('top-right')">top-right</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.success('This is a notification', { position: 'top-right' });</code></pre>
                            </div>
                           <div class="form-group">
                                <button class="btn btn-primary" @click="show('top-center')">top-center</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.success('This is a notification', { position: 'top-center' });</code></pre>
                            </div>
                           <div class="form-group">
                                <button class="btn btn-primary" @click="show('bottom-left')">bottom-left</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.success('This is a notification', { position: 'bottom-left' });</code></pre>
                            </div>
                           <div class="form-group">
                                <button class="btn btn-primary" @click="show('bottom-right')">bottom-right</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.success('This is a notification', { position: 'bottom-right' });</code></pre>
                            </div>
                           <div class="form-group">
                                <button class="btn btn-primary" @click="show('bottom-center')">bottom-center</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.success('This is a notification', { position: 'bottom-center' });</code></pre>
                            </div>


                           <div class="form-group">
                                <button class="btn btn-primary" @click="alert()">alert</button>
                                <pre data-lang="js"><code>this.$Msg.alert('This is a notification');</code></pre>
                            </div>

                           <div class="form-group">
                                <button class="btn btn-primary" @click="confirm()">confirm</button>
                                <pre data-lang="js"><code>this.$Msg.confirm('Are you sure want to delete this item?').then(({ data }) => {
                                        alert('You choose: ' + data);
                                    })</code></pre>
                            </div>

                           <div class="form-group">
                                <button class="btn btn-info" @click="info()">info</button>
                                <pre data-lang="js"><code>this.$Msg.info('This is a notification');</code></pre>
                            </div>

                           <div class="form-group">
                                <button class="btn btn-warning" @click="warning()">warning</button>
                                <pre data-lang="js"><code>this.$Msg.warning('This is a notification');</code></pre>
                            </div>
                           <div class="form-group">
                                <button class="btn btn-danger" @click="error()">error</button>
                                <pre data-lang="js"><code>this.$Msg.error('This is a notification');</code></pre>
                            </div>

                           <div class="form-group">
                                <button class="btn btn-primary" @click="timeout()">timeout</button>
                                <pre
                                    data-lang="js"><code>this.$Msg.info('This is a notification',{timeout: 3000});</code></pre>
                            </div>
                        </div>

                        <div class="col-12 col-lg-4">
                            <div class="viralroll" data-id="5e8d2bb73364491e2a946eec"></div>
                            <div class="viralroll" data-id="5ea8fab3955c072b08e841bd"></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


        <footer class="text-center">
           <div class="form-group">
                <a class="social-icon" href="https://github.com/Morioh-Lab/v-msg" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </div>

           <div class="form-group">Themed by <a href="http://on.morioh.net/96d5d36367" target="_blank">Morioh Theme</a><br>
                Made Love by <a href="https://morioh.com">Morioh Team</a>

            </div>


        </footer>
        
    </div>
</template>

<script>
    export default {

        methods: {
            show(p) {
                this.$Msg.success('This is a notification', { position: p });
            },
            error() {
                this.$Msg.error('This is a notification');
            },
            info() {
                this.$Msg.info('This is a notification');
            },

            warning() {
                this.$Msg.warning('This is a notification');
            },

            alert() {
                this.$Msg.alert('This is a notification');
            },
            timeout() {
                this.$Msg.info('This is a notification', { timeout: 3000 });
            },

            confirm() {
                this.$Msg.confirm('Are you sure want to delete this item?').then(({ data }) => {
                    //alert('You choose: ' + data);
                    this.$Msg.alert('You choose: ' + data);
                })
            }

        },

    }
</script>