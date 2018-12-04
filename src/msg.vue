<template>
    <div class="v-msg-container">
        <div class="v-msg-container v-msg-top-right">
            <transition-group enter-active-class="animated quick fadeInRight" leave-active-class="animated quick fadeOutRight">
                <div class="v-msg-box" :class="{[t.theme]: t.theme}" v-for="t in pool['top-right']" :key="t.key">
                    <button aria-label="Close" data-dismiss="alert" class="close" type="button" @click="remove(t)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="t.title">{{t.title}}</h6>
                    {{t.message}}
                </div>
            </transition-group>
        </div>
        <div class="v-msg-container v-msg-top-left">
            <transition-group enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
                <div class="v-msg-box" :class="{[t.theme]: t.theme}" v-for="t in pool['top-left']" :key="t.key">
                    <button aria-label="Close" data-dismiss="alert" class="close" type="button" @click="remove(t)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="t.title">{{t.title}}</h6>
                    {{t.message}}
                </div>
            </transition-group>
        </div>
        <div class="v-msg-container v-msg-bottom-left">
            <transition-group enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
                <div class="v-msg-box" :class="{[t.theme]: t.theme}" v-for="t in pool['bottom-left']" :key="t.key">
                    <button aria-label="Close" data-dismiss="alert" class="close" type="button" @click="remove(t)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="t.title">{{t.title}}</h6>
                    {{t.message}}
                </div>
            </transition-group>
        </div>
        <div class="v-msg-container v-msg-bottom-right">
            <transition-group enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                <div class="v-msg-box" :class="{[t.theme]: t.theme}" v-for="t in pool['bottom-right']" :key="t.key">
                    <button aria-label="Close" data-dismiss="alert" class="close" type="button" @click="remove(t)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="t.title">{{t.title}}</h6>
                    {{t.message}}
                </div>
            </transition-group>
        </div>
        <div class="v-msg-container v-msg-top-center">
            <transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
                <div class="v-msg-box" :class="{[t.theme]: t.theme}" v-for="t in pool['top-center']" :key="t.key">
                    <button aria-label="Close" data-dismiss="alert" class="close" type="button" @click="remove(t)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="t.title">{{t.title}}</h6>
                    {{t.message}}
                </div>
            </transition-group>
        </div>
        <div class="v-msg-container v-msg-bottom-center">
            <transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
                <div class="v-msg-box" :class="{[t.theme]: t.theme}" v-for="t in pool['bottom-center']" :key="t.key">
                    <button aria-label="Close" data-dismiss="alert" class="close" type="button" @click="remove(t)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="t.title">{{t.title}}</h6>
                    {{t.message}}
                </div>
            </transition-group>
        </div>





        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" v-if="msg">
            <div class="v-msg-backdrop"></div>
        </transition>

        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut" v-if="msg">
            <div class="v-msg-container v-msg-alert">
                <div class="v-msg-box">
                    <button aria-label="Close" class="close" type="button" @click="close(1)">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h6 class="v-msg-title" v-if="msg.title">{{msg.title}}</h6>
                    <p class="v-msg-content">{{msg.message}}</p>

                    <div class="v-msg-bottom">
                        <button class="btn btn-primary" @click="close(1)">{{msg.btn.ok}}</button>
                        <button class="btn btn-light float-right" v-if="msg.type=='confirm'" @click="close(0)">{{msg.btn.cancel}}</button>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>
<script>

    export default {

        data() {
            return {
                items: [],

                defaults: {
                    title: 'Message',
                    position: 'top-right',
                    timeout: 8000,
                    btn: {
                        ok: ' OK ',
                        cancel: ' Cancel'
                    },
                    callback: null
                },

                msg: null,

                pool: {
                    'top-right': [],
                    'top-left': [],
                    'top-center': [],
                    'bottom-left': [],
                    'bottom-right': [],
                    'bottom-center': [],
                }
            }
        },
        methods: {
            success(message, option = {}) {
                return this.add(message, Object.assign(option, { theme: 'v-notify-success' }));
            },
            info(message, option = {}) {
                return this.add(message, Object.assign(option, { theme: 'v-notify-info' }));
            },
            warning(message, option = {}) {
                return this.add(message, Object.assign(option, { theme: 'v-notify-warning' }));
            },
            error(message, option = {}) {
                return this.add(message, Object.assign(option, { theme: 'v-notify-error' }));
            },
            alert(message, option = {}) {
                return this.add(message, Object.assign(option, { type: 'alert' }));
            },
            confirm(message, option = {}) {
                return this.add(message, Object.assign(option, { type: 'confirm' }));
            },
            add(message, option) {

                return new Promise((resolve, reject) => {
                    if (!this.$parent) {
                        this.$mount()
                        document.body.appendChild(this.$el)
                    }
                    var item = Object.assign({}, this.defaults, option, { message, key: `${Date.now()}-${Math.random()}`, callback: resolve });

                    if (item.type == 'alert' || item.type == 'confirm') {
                        this.msg = item;
                    } else {
                        this.pool[item.position].push(item);
                        if (item.timeout > 0)
                            setTimeout(() => this.remove(item), item.timeout);
                    }

                });

            },
            close(val) {
                if (this.msg.callback) {
                    this.msg.callback({ data: val });
                }
                this.msg = null;
            },

            remove(item) {
                let i = this.pool[item.position].indexOf(item)
                if (i >= 0) {
                    this.pool[item.position].splice(i, 1)
                }
            }

        },

    }
</script>