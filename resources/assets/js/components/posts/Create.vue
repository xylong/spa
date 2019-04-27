<template>
    <div class="container">
        <div class="col-md-12 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-body">
                    <h2 class="text-center">
                        <i class="glyphicon glyphicon-edit"></i>编辑
                    </h2>

                    <hr>

                    <form accept-charset="UTF-8" @submit.prevent="add">
                        <div class="form-group">
                            <input class="form-control" type="text" name="title" placeholder="请填写标题"
                                   v-model="post.title" required/>
                        </div>

                        <div class="form-group">
                            <quill-editor ref="myTextEditor"
                                          v-model="post.content"
                                          :options="editorOption"
                                          @blur="onEditorBlur($event)"
                                          @focus="onEditorFocus($event)"
                                          @ready="onEditorReady($event)">
                            </quill-editor>
                            <div class="quill-code">
                                <code class="hljs" v-html="contentCode"></code>
                            </div>
                        </div>

                        <div class="well well-sm">
                            <router-link to="/posts" class="btn">cancel</router-link>
                            <button type="submit" class="btn btn-primary">
                                <span class="glyphicon glyphicon-ok"></span> 保存
                            </button>
                        </div>
                    </form>

                    <div class="alert alert-danger" v-if="errors">
                        <ul>
                            <li v-for="(fieldsError,fieldName) in errors" :key="fieldName">
                                <strong v-text="fieldName"></strong>{{ fieldsError.join('\n') }}
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import hljs from 'highlight.js';
    import validate from 'validate.js';


    export default {
        data() {
            return {
                name: '01-example',
                editorOption: {
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{'header': 1}, {'header': 2}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'script': 'sub'}, {'script': 'super'}],
                            [{'indent': '-1'}, {'indent': '+1'}],
                            [{'direction': 'rtl'}],
                            [{'size': ['small', false, 'large', 'huge']}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'font': []}],
                            [{'color': []}, {'background': []}],
                            [{'align': []}],
                            ['clean'],
                            ['link', 'image', 'video']
                        ],
                        syntax: {
                            highlight: text => hljs.highlightAuto(text).value
                        }
                    }
                },
                post: {
                    title: '',
                    content: ''
                },
                errors: null,
            }
        },
        methods: {
            onEditorBlur(editor) {
                console.log('editor blur!', editor)
            },
            onEditorFocus(editor) {
                console.log('editor focus!', editor)
            },
            onEditorReady(editor) {
                console.log('editor ready!', editor)
            },
            add() {
                this.errors = null;
                const constraints = this.getConstraints();
                const error = validate(this.$data.post, constraints);

                if (error) {
                    this.errors = error;
                    return;
                }

                axios.post('/api/posts', this.$data.post,{
                    headers: {
                        'Authorization': `Bearer ${this.currentUser.token}`
                    }
                })
                    .then((response) => {
                        this.$router.push('/posts');
                    })
            },
            getConstraints() {
                return {
                    title: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'must be at least 3 characters long'
                        }
                    },
                    content: {
                        presence: true,
                        length: {
                            minimum: 10,
                            message: 'must be at least 10 characters long'
                        }
                    }
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quill
            },
            contentCode() {
                return hljs.highlightAuto(this.post.content).value
            },
            currentUser(){
                return this.$store.getters.currentUser;
            }
        },
        mounted() {
            setTimeout(() => {
                this.post.content = '';
            }, 1300)
        }
    }
</script>

<style lang="scss" scoped>
    .quill-code {
        border: none;
        height: auto;
        > code {
            width: 100%;
            margin: 0;
            padding: 1rem;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0;
            height: 10rem;
            overflow-y: auto;
            resize: vertical;
        }
    }
</style>
