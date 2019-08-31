<template>
  <div class="media">
    <a class="pull-left" href="#pablo">
      <div class="avatar">
        <slot name="avatar">
          <img class="media-object img-raised" alt="Tim Picture" :src="avatar" />
        </slot>
      </div>
    </a>
    <div class="media-body">
      <h5 class="media-heading">
        <slot name="author">{{author}}</slot>
        <slot name="date">
          <small class="text-muted">&middot; {{date}}</small>
        </slot>
      </h5>
      <slot name="comment">
        <span v-html="comment"></span>
      </slot>

      <div class="media-footer">
        <slot name="actions"></slot>
      </div>
      <div>
        <slot name="replies">
          <comment
            v-for="comment in replies"
            :key="comment.author"
            :author="comment.author"
            :avatar="comment.avatar"
            :date="comment.date"
            :comment="comment.comment"
            :replies="comment.replies"
          >
            <template slot="actions">
              <el-tooltip content="Reply To Comment" placement="top">
                <a href="#pablo" class="btn btn-primary btn-neutral pull-right">
                  <i class="now-ui-icons ui-1_send"></i> Reply
                </a>
              </el-tooltip>
              <a
                href="#pablo"
                :class="{'btn-default': !comment.liked}"
                class="btn btn-neutral pull-right"
              >
                <i class="now-ui-icons ui-2_favourite-28"></i>
                {{comment.likes}}
              </a>
            </template>
          </comment>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { Tooltip } from 'element-ui'
export default {
  name: 'comment',
  components: {
    [Tooltip.name]: Tooltip,
  },
  props: {
    avatar: {
      type: [String, Object],
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    comment: {
      type: String,
      default: '',
    },
    replies: {
      type: Array,
      default: () => [],
    },
  },
}
</script>